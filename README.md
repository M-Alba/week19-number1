# week19-number1

Ответы на вопросы:

1.  Опишите разницу между синхронными и асинхронными функциями.
    В синхронных функциях одна операция должна завершиться, прежде чем будет запущена следующая операция. В этом случае скрипт выполняется строго по порядку операций, и выполнение скрипта приостанавливается, если одна из операций занимает очень много времени.
    Асинхронные функции обычно принимают callback-функцию в качестве параметра, и выполнение продолжается на следующей строке сразу после вызова асинхронной функции. Callback-функция вызывается только тогда, когда асинхронная операция завершена и стек вызовов пуст.

2.  Сравните подходы работы с асинхронным кодом: сallbacks vs promises vs async / await.
    2.1 Callback (функция обратного вызова) — функция, которая вызывается в ответ на совершение некоторого события.
    Этот метод был очень эффективным, но только до определенного момента. Иногда разработчикам приходится делать несколько обращений к разным источникам в своем коде. Чтобы сделать эти вызовы, обратные вызовы вкладывают друг в друга до тех пор, пока их не станет очень трудно читать или поддерживать. Это называется Callback Hell.

    2.2 Появились promises, чтобы решить проблемы функций обратного вызова.
    Promise — это то, что требует некоторого времени для выполнения. Есть два возможных результата обещания:

    - Мы либо запускаем и разрешаем (resolve) promise, либо
    - В строке происходит какая-то ошибка, и обещание отклоняется (reject)

    Промисы — это удобный способ исправить проблемы, вызванные адом обратных вызовов, в методе, известном как цепочка промисов. Можно использовать этот метод для последовательного получения данных из нескольких конечных точек, но с меньшим количеством кода и более простыми методами.

    2.3 Объединение обещаний вместе, как и обратных вызовов, может стать довольно громоздким и запутанным. Вот почему были созданы Async и Await.
    Ключевое слово async — это то, что используется для определения асинхронных функций.
    Ключевое слово await, ожидающее асинхронных результатов, делает код почти синхронным, но со всеми преимуществами Promises.
    Основная суть async/await: выполнять асинхронные операции синхронным образом.
    Ключевое слово await можно использовать только в асинхронных функциях, иначе будет выдано сообщение об ошибке.

    3. Что такое цикл событий (event loop) в JS ?

    Идея событийного цикла очень проста. Есть бесконечный цикл, в котором движок JavaScript ожидает задачи, исполняет их и снова ожидает появления новых.
    Общий алгоритм движка:
    1)Пока есть задачи: выполнить их, начиная с самой старой
    2)Бездействовать до появления новой задачи, а затем перейти к пункту 1

    4. Какая разница между «стеком вызовов» (call stack) и «очередью задач» (task queue)?

    Если стек вызовов пуст и в очереди задач есть callback-функции, то функция удаляется из очереди и помещается в стек вызовов для выполнения.

    Call stack - это то место, куда по ходу работы программы попадают вызванные функций, после чего выполняются.
    Task Queue — это очередь из сообщений различных API предоставленных окружением будь то node.js или браузер. Эти сообщения нужны для того, чтобы навешать на них функции обратного вызова после того, как CallStack будет обработан.

    5. Какие версии HTTP-протокола вам известны?
       HTTP/1.1, HTTP/2 (не то, чтобы я об этом знала, но нашла в интернете).

    6. Какие знаете коды ответа (состояния) HTTP?

    404 Not Found, 500 Internal Server Error, 502 Bad Gateway

    7. Как клиент взаимодействует с сервером?
       Клиент отправляет запрос, а сервер возвращает ответ. Этот обмен сообщениями является примером межпроцессного взаимодействия. Для взаимодействия компьютеры должны иметь общий язык, и они должны следовать правилам, чтобы и клиент, и сервер знали, чего ожидать.

    8. Самостоятельно разберитесь, что такое Cross-Origin Resource Sharing? Как устранить проблемы с CORS?

    Cross-Origin Resource Sharing (CORS или “совместное использование ресурсов различными источниками”) — это контролируемый и применяемый в принудительном порядке клиентом (браузером) механизм обеспечения безопасности на основе HTTP.
    Фундаментальная идея “исправления CORS” заключается в том, чтобы отвечать на OPTIONS запросы, отправленные от клиента, корректными заголовками. Есть много способов начать отвечать корректными CORS (настроить сервер, установить расширения для браузера, отключить CORS-проверки в браузере, настроить прокси-сервер).

    9. Самостоятельно разберитесь, что такое REST?

    REST или Representational state transfer, что переводится как передача состояния представления — это архитектурный стиль взаимодействия компонентов распределённого приложения в сети.
    REST — это набор правил того, как программисту организовать написание кода серверного приложения, чтобы все системы легко обменивались данными и приложение можно было масштабировать.
    Обязательные условия-ограничения:
    -модель клиент-сервер;
    -отсутствие состояния;
    -кэширование;
    -единообразие интерфейса;
    -слои;
    -код по требованию.
    Если сервис-приложение нарушает любое из этих ограничительных условий, данную систему нельзя считать REST-системой.

    10. Как посмотреть заголовки запроса к странице или API?
        F12 --> вкладка Network --> обновляем через F5 --> Далее в графе «Name» необходимо выбрать тип файла, для которого нужно проверить заголовки, и справа во вкладке «Headers» будут указаны все заголовки текущего файла.

    11. Что можно писать в параметре заголовков Content-Type?

    Заголовок Content-Type используется для того, чтобы определить MIME тип ресурса.
    application/x-www-form-urlencoded, multipart/form-data, text/plain, application/json.

    12. Давайте отправим информацию о собачке в API по адресу localhost/pets/add
        JSON с информацией о собаке:
        {
        "breed": "Beagle",
        "size": "large",
        "color": "orange",
        "age": 6
        }
        Как будет выглядеть fetch в таком случае?

        fetch('localhost/pets/add', {
        method: 'POST',
        body: JSON.stringify({
        breed: 'Beagle',
        size: 'large',
        color: 'orange',
        age: 6
        })
        });
