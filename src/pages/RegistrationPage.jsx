import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const RegisterSchema = yup
    .object()
    .shape({
      name: yup.string().required("Укажите имя!").min(3, "Минимум 2 символов!"),
      password: yup
        .string()
        .required("Укажите пароль")
        .min(5, "Минимум 5 символов!"),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], ('Пароли должны совпадать')),  
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "all",
  });

  const onSubmit = ({ name, password }) => {
    const isAuth = JSON.parse(window.localStorage.getItem('admin'))
    if(isAuth?.name === name) {
      alert('Вы уже зарегистрированы!')
    }
    window.localStorage.setItem(password, JSON.stringify({name, password}))
    navigate('/')
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h3 className="form-title">Регистрация</h3>
      <label className="form-lb">
        <input
          className="form-input"
          type="text"
          placeholder="Имя"
          {...register("name", { required: "Укажите имя!" })}
        />
        <p className="form-error">{errors.name?.message}</p>
      </label>
      <label className="form-lb">
        <input
          className="form-input"
          type="password"
          placeholder="Пароль"
          {...register("password", { required: "Укажите пароль" })}
        />
        <p className="form-error">{errors.password?.message}</p>
      </label>
      <label className="form-lb">
        <input
          className="form-input"
          type="password"
          placeholder="Повторите пароль"
          {...register("confirmPassword", { required: "Укажите пароль" })}
        />
        <p className="form-error">{errors.confirmPassword?.message}</p>
      </label>
      <button type="submit" disabled={!isValid} className="form-btn">
        Зарегистрироваться
      </button>
      <Link to="/login">Уже зарегистрированы?</Link>
    </form>
  );
};

export default RegistrationPage;
