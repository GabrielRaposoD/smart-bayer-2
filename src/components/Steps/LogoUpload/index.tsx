// Module Imports
import React from 'react'
import { useFormikContext } from 'formik'

// Applications import
import { ButtonState, SmartStep } from '@typings/index'

// Components Import
import { Logo, Stepper } from '@components/index'

export const LogoUpload: SmartStep = () => {
  const formik = useFormikContext<any>()

  function updateFile(file: File) {
    if (!file) return null
    if (file.size > 2000000) {
      formik.setFieldValue('logo', null)
      formik.setFieldValue('logoError', true)
    } else {
      formik.setFieldValue('logo', file)
      formik.setFieldValue('logoError', false)
    }
  }

  return (
    <div className="md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10">
      <div className="flex flex-col">
        <div className="md:mt-0 mt-6">
          <Logo />
        </div>
        <div className="w-full mt-16">
          <h1 className="md:text-4xl text-2xl font-bold leading-snug text-gray-800">Insira o logo da sua loja</h1>
          <div className="mt-10 text-base font-medium text-gray-800 bg-gray-200 rounded-xl py-3 px-6">
            <p>Para melhor aproveitamento da sua marca, recomendamos:</p>
            <ul className="list-inside mt-2 space-y-1">
              <li>- Formato PNG ou JPG</li>
              <li>- Fundo transparente</li>
              <li>- Peso máximo de 2MB</li>
            </ul>
          </div>
          <input
            type="file"
            id="logo-input"
            name="logo-input"
            className="hidden"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => updateFile(e.target.files[0])}
          />
          {formik.values.logo ? (
            <div className="w-full mt-10 flex flex-col">
              <img src={URL.createObjectURL(formik.values.logo)} alt="Company Logo" className="w-40" />
              <label className="text-base underline text-primary font-regular" htmlFor="logo-input">
                Substituir Imagem
              </label>
              <div className="w-full mt-10 rounded-xl bg-green px-4 py-3 leading-relaxed text-white font-thin tracking-wider text-base">
                Sua imagem foi carregada com sucesso!
              </div>
            </div>
          ) : (
            <div className="w-full mt-10">
              <div className="w-7/12 text-base font-medium text-gray-600">
                <label
                  className="px-20 w-full rounded-full py-3 text-xl font-medium border border-primary border-solid bg-primary text-white"
                  htmlFor="logo-input"
                >
                  Carregar Imagem
                </label>
              </div>
            </div>
          )}

          {formik.values.logoError && (
            <div className="w-full mt-10 rounded-xl bg-red px-4 py-3 leading-relaxed text-white font-thin tracking-wider text-base">
              Sua imagem não está nos requisitos necessários. Tente novamente.
            </div>
          )}
        </div>
      </div>
      <div className="w-full mt-6">
        <Stepper buttonState={formik.values.logo ? ButtonState.normal : ButtonState.disabled} />
      </div>
    </div>
  )
}
