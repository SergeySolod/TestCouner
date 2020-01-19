import React from 'react'

const Home = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Тестовое задание</h1>
                <p className="lead">
                    <b>Моё решение:</b> https://github.com/SergeySolod/TestCouner<br/>
                    <b>Технологии:</b> React.js, React-Router, Redux, React-Redux, Bootstrap, HTML, CSS<br/>
                    <b>Видеообзор:</b> https://youtu.be/hJaYHRkkG3g<br/>
                </p>
                <h1 className="display-4">Задание</h1>
                <p className="lead">
                    Необходимо реализовать приложение для работы с элементами-счетчиками.
                    Приложение должно быть реализовано с помощью react-redux;
                </p>
                <p className="lead">
                    Элемент-счетчик содержит кнопки ‘+’ и ‘-‘, которые увеличивают и уменьшают его значение;
                </p>
                <p className="lead">
                    Счетчики можно как добавлять, так и удалять со страницы;
                </p>
                <p className="lead">
                    Каждый четвертый счетчик на странице не содержит кнопок + и - , а каждую секунду увеличивает свое
                    значение на один;
                </p>
                <p className="lead">
                    При добавлении нового счетчика на страницу его значение будет равно сумме значений всех других
                    счетчиков на странице (например, на странице два счетчика со значениями 3 и 7, у нового счетчика
                    будет значение 10);
                </p>
                <p className="lead">
                    Данные счетчиков должны храниться в глобальном state (reducer);
                </p>
                <p className="lead">
                    Дизайн не важен.
                </p>
                <p className="lead">
                    Результатом выполнения задания должен быть npm-пакет с реализованным приложением.
                    Файл package.json должен содержать команду для запуска приложения для просмотра в браузере.
                    Важно: приложение должно быть написано с использованием синтаксиса ES6/Typescript.

                </p>
                <p className="lead">
                    Результат можно выслать в виде архива или в виде ссылки на внешний ресурс (например, github)
                </p>
            </div>
        </div>
    )
}

export default Home;