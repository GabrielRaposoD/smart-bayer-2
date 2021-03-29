import { emailTemplate } from './../mocks/email';
import axios from 'axios';

export const createVideo = async ({
  product,
  template,
  farmerName,
  name,
  phone,
  company,
  service,
  experience,
  oportunity,
  defensive,
  defensiveProduct,
  foto1,
  foto2,
  email,
}) => {
  const myHeaders = new Headers();
  myHeaders.append('external-id', 'e5e16966-0218-46ad-a042-04241db0a9de');
  myHeaders.append('token', 'fe96c4647e55a2496cc3fade6e95b873');

  var formdata = new FormData();
  formdata.append('[video]name', name);
  formdata.append('[video]email', name);
  formdata.append('video[email]', email);
  formdata.append('[video]track_id', template.trackId);
  formdata.append('[video]template_id', template.id);
  formdata.append('[video][data]text_agricultor_01', farmerName);
  formdata.append('[video][data]text_agricultor_02', farmerName);
  formdata.append('[video][data]text_oportunidade_01', oportunity);
  formdata.append('[video][data]text_rtv_01', name);
  formdata.append('[video][data]text_telefone_01', phone);

  if (company) {
    formdata.append('[video][data]text_produto_01', product.name);
    formdata.append('[video][data]image_produto_01', product.photoUri);
  }

  if (defensive) {
    formdata.append('[video][data]image_produto_02', defensive.photoUri);
    formdata.append(
      '[video][data]image_logo_01',
      defensiveProduct.secondPhotoUri
    );
  }

  if (service) {
    formdata.append('[video][data]text_servico_01', service.name);
    formdata.append('[video][data]image_servico_01', service.photoUri);
  }

  if (experience) {
    formdata.append('[video][data]text_experiencia_01', experience.description);
    formdata.append('[video][data]image_experiencia_01', experience.photoUri);
  }

  if (foto1) {
    const photo1 = await uploadImage(foto1);
    formdata.append('[video][data]image_visita_01', photo1.url);
  }

  if (foto2) {
    const photo2 = await uploadImage(foto2);
    formdata.append('[video][data]image_visita_02', photo2.url);
  }

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow' as RequestRedirect,
  };

  const data = await fetch(
    'https://restless-boat-911d.gabriel-raposo.workers.dev/?https://api.chiligumvideos.com/api/videos',
    requestOptions
  ).then((response) => response.json());

  return data;
};

export const uploadImage = (photo) => {
  var myHeaders = new Headers();
  myHeaders.append('external-id', 'e5e16966-0218-46ad-a042-04241db0a9de');
  myHeaders.append('token', 'fe96c4647e55a2496cc3fade6e95b873');

  var formdata = new FormData();
  formdata.append('[asset]name', photo.name);
  formdata.append('[asset]attachment', photo, photo.name);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow' as RequestRedirect,
  };

  const data = fetch(
    'https://restless-boat-911d.gabriel-raposo.workers.dev/?https://api.chiligumvideos.com/api/assets',
    requestOptions
  ).then((response) => response.json());

  return data;
};

export const sendVideoEmail = (url, userEmail, name) => {
  const email = emailTemplate(url, name);

  const data = {
    from: { name: 'Chiligum Creatives', email: 'admin@chiligumvideos.com' },
    to: userEmail,
    message_title: 'Seu vídeo está pronto',
    html: email,
  };

  axios.post(
    'https://ybgviasmge.execute-api.us-east-1.amazonaws.com/prod/send_email',
    //@ts-ignore
    data,
    {
      headers: {
        Authorization: 'Basic Y2hpbGlndW06Y2hpbGlndW1fYWRtaW5pc3RyYXRvcg==',
        'Content-Type': 'application/json',
      },
    }
  );
};
