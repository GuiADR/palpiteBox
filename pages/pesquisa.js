import React, { useState } from 'react';
import QRCode from 'react-qr-code';

import PageTitle from '../components/title';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 5
  });
  const Notas = [1, 2, 3, 4, 5];
  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState({});
  const save = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
    } catch (err) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa" />
      <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
      <p className="text-center mb-6">
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {!success && <form className="w-1/4 mx-auto">
        <label className="font-bold" htmlFor="name">Seu nome</label>
        <input className="p-4 w-full block shadow bg-blue-100 my-2 rounded" id="name" type="text" onChange={onChange} name="Nome" value={form.Nome} />
        <label className="font-bold" htmlFor="whatsapp">Seu Whatsapp</label>
        <input className="p-4 w-full block shadow bg-blue-100 my-2 rounded" id="whatsapp" type="text" onChange={onChange} name="Whatsapp" value={form.Whatsapp} />
        <label className="font-bold" htmlFor="email">Seu email</label>
        <input className="p-4 w-full block shadow bg-blue-100 my-2 rounded" id="email" type="text" onChange={onChange} name="Email" value={form.Email} />
        <div className="flex justify-center">
          {Notas.map(nota =>
            <label key={nota} htmlFor={'nota-' + nota} className="block w-1/6">{nota}<br />
              <input type="radio" name="Nota" id={'nota-' + nota} value={nota} onChange={onChange} />
            </label>
          )}
        </div>


        <button
          className="bg-blue-400 w-full p-4 my-2 font-bold rounded-lg shadow-lg hover:shadow"
          onClick={save}>Salvar</button>
      </form>}
      {success &&
        <div className="w-1/4 mx-auto">
          <p className="bg-blue-100 mb-6 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center">
            Obrigado por contribuir com sua opnião ou critica
          </p>
          {
            retorno.showCoupon && <div className="mx-auto border p-4 mb-4">
              Seu cupom:
              <div >
                <QRCode
                  value={retorno.Cupom}
                />
              </div>
              <strong className="text-2xl">{retorno.Cupom}</strong>
              <br />
              <span className="italic">Tire um print ou foto desta tela e mostre ao estabelecimento.</span>
            </div>
          }
        </div>}
    </div>
  )
}

export default Pesquisa;