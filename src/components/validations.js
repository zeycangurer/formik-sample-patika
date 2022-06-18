import * as yup from 'yup';

const validationSchema = yup.object().shape({
    
    email: yup.string().email('Geçerli bir email girin.').required('Zorunlu alan.'),
    password: yup.string().min(5,'Parola en az 5 karakter olmalı.').required('Zorunlu alan.'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Parolalar uyuşmuyor.').required('Zorunlu alan.')
   
  });
  
  export default validationSchema