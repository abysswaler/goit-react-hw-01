<!-- # Домашнє завдання

- Створений репозиторій goit-react-hw-01.
- При здачі домашньої роботи є два посилання: на вихідні файли та робочу сторінку завдання на Vercel (https://vercel.com/).
- Проєкт створено за допомогою Vite (https://vite.dev/).
- Під час відвідування живої сторінки завдання, в консолі відсутні помилки і попередження.
- Для кожного компонента у папці src/components є окрема папка, яка містить JSX файл самого React компонента та файл його стилів. Назва папки, файла компонента (з розширенням .jsx) та файла стилів (перед .module.css) однакова і відповідає назвам, вказаним у завданнях (якщо вони були)
- Для експорту компонентів використовується експорт за замовчуванням (export default).
- Компоненти всіх завдань рендеряться на одній сторінці, всередині кореневого компонента <App>.
- Все, що компонент очікує у вигляді пропсів, передається йому під час виклику.
- JS-код чистий та зрозумілий, використовується Prettier.
- Стилізація виконана CSS-модулями. -->

<!-- - Завдання 1 - Профіль соціальної мережі

  - Необхідно створити компонент <Profile>, за допомогою якого ми могли б відображати інформацію про користувача соціальної мережі.
  - Компонент повинен приймати кілька пропсів з інформацією про користувача: - name — ім'я користувача - tag — тег в соціальній мережі без @ - location — місто і країна - image — посилання на зображення - stats — об'єкт з інформацією про активності
  - Компонент повинен створювати розмітку наступної структури, але з динамічними даними, що надходять у вигляді описаних раніше пропсів.
  - Рендеримо компонент Profile всередині App
  - Передаємо компоненту Profile дані у вигляді пропсів
  - Використовуйте ці дані користувача у своїй роботі для значень пропсів.
  - Треба винести дані користувача в JSON-файл, щоб не завантажувати компонент App. Наприклад, створіть у папці src файл userData.json, перенесіть туди дані користувача, відформатуйте їх у формат JSON, а потім імпортуйте його в App, щоб передати ці дані через пропси. -->

<!-- - Завдання 2 - Список друзів

  - Необхідно створити компонент <FriendList>, за допомогою якого ми могли б відображати інформацію про друзів користувача.
  - Компонент <FriendList> повинен приймати один проп friends - масив об'єктів друзів та створювати DOM розмітку наступної структури.
  - Компонент <FriendListItem> - це картка одного друга, яка повинна приймати кілька пропсів:
    - vatar - посилання на аватар
    - name - ім'я друга
    - isOnline - буль, що сигналізує про стан друга: в мережі або ні.
  - Компонент <FriendListItem> повинен створювати DOM розмітку наступної структури.
  - Залежно від пропа isOnline, текст в p.status повинен змінюватися, а його колір тексту - також. Якщо значення true, то текст Online і колір тексту зелений, в іншому випадку текст Offline і червоний колір тексту. Це можна зробити за допомогою різних CSS-класів. Приклад використання компонента FriendList в компоненті App. Дані про друзі це масив об'єктів із відомими властивостями. Використовуй ці дані в своїй роботі для значень пропсів.
  - Треба винести дані про друзів в JSON-файл, щоб не ускладнювати компонент App. Наприклад, створіть у папці src файл friends.json, перемістіть туди масив друзів, форматуючи дані під формат JSON, і потім імпортуйте його в App, щоб передати ці дані пропсами. -->

<!-- - Завдання 3 - Історія транзакцій
  - Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.
  - Дані для списку доступні у форматі массива об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:
    - id — унікальний ідентифікатор транзакції
    - type — тип транзакції
    - amount - сума транзакції
    - currency - тип валюти
  - Необхідно створити компонент <TransactionHistory>, який приймає один проп items - масив об'єктів транзакцій. Компонент створює розмітку таблиці. Кожна транзакція - це рядок таблиці. У прикладі наведена розмітка двох транзакцій.
  - Приклад використання компонента TransactionHistory у компоненті App. Використовуйте ці дані у своїй роботі для значень пропсів.
  - Треба винести дані про транзакції у JSON-файл, щоб не захламлювати компонент App. Наприклад, створіть файл із назвою transactions.json у папці src, перемістіть туди масив транзакцій, відформатуйте дані у формат JSON, а потім імпортуйте його в компонент App, щоб передати ці дані як пропси. -->
