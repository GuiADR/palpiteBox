import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';
import { parse } from 'postcss';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('1C1dWnlb-mYz-cJCzVMiESr4xwcCRtqL7O_IloUyCtfE');

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');

    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);

    let Cupom = '';
    let Promo = '';
    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      Cupom = genCupom();
      Promo = textoCell.value;
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom,
      Promo,
      'Data preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      Nota: parseInt(data.Nota)
    });
    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }));
  } catch (err) {
    console.log(err);
    res.end('error');
  }

}