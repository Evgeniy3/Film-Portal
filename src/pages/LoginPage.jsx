import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginPage = () => {
  const navigate = useNavigate();


  const RegisterSchema = yup
    .object()
    .shape({
      name: yup.string().required("Укажите имя!").min(3, "Минимум 2 символов!"),
      password: yup
        .string()
        .required("Укажите пароль")
        .min(5, "Минимум 5 символов!"),
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
      if(!isAuth) {
        alert('Вы не зарегистрированы!')
      }
      else if(isAuth.name === name && isAuth.password === password) {
        navigate('/')
      } else {
        alert('Неверный логин или пароль!')
      } 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h3 className="form-title">Вход</h3>
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
      <button type="submit" disabled={!isValid} className="form-btn">
        Войти
      </button>
      <Link to="/registration">Нет аккаунта?</Link>
    </form>
  );
}

export default LoginPage