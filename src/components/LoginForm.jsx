function LoginForm() {
    return (
        <form className="form" action="">
            <h1 className="title">Вход в систему</h1>
            <input
                className="form-control"
                type="email" name="email"
                id="email"
                placeholder="E-mail"
                required
            />
            <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                required
            />
            <button className="button is-primary">Войти</button>
            <p className="helper">Еще нет аккаунта? Пройди <span className="link">регистрацию</span></p>
        </form>
    );
}

export default LoginForm;