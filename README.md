`git checkout -b название_ветки` - создаем ветку для работы по таске

Если какие-то изменения надо стянуть с ветки develop, делаем `git pull origin develop`

## Команды для работы

- `dev` - запуск dev сервера проекта
- `build` - сборка прод версии проекта
- `start` - запуск прод сервера проекта
- `stylelint` - проверяем файлы стилей на синтаксические ошибки
- `stylelint:fix` - авто-исправление синтаксических ошибок в стилях
- `prettier` - форматер кода
- `prettier:fix` - форматирование всех файлов
- `lint` - проверка синтаксиса js/ts файлов
- `lint:fix` - авто-исправление синтаксических ошибок
- `storybook` - запуск dev-сервера storybook`а
- `build-storybook` - сборка storybook для деплоя

## Во время разработки

```bash
npm run dev
npm run storybook
```

## Перед пушем

- `npm run build` - проверяем исправность build сборки
  stylelint и eslint сделает проверку при коммите

## Структура компонента

```
Component
  ├── index.ts
  ├── Component.tsx
  ├── Component.styles.ts
  ├── Component.stories.tsx
  ├── Component.types.ts
  ├── Component.context.ts
  ├── Component.lazy.ts
  └── Component.spec.ts
```

Все эти файлы могут быть не обязательны. К примеру, если типизация достаточно большая, то выносим её в отдельный файл. В противном случае не обязательно.

Про lazy файл. Он служит для декомпозиций набора стилизованных loader или skeleton если она окажется достаточно большой

```
views
└── registration
  ├── index.tsx
  ├── registration.module.scss
  ├── registration.types.ts
  ├── registration.context.ts
  ├── registration.test.ts
  └── sections
    ├── first
    | ├── index.tsx
    | ├── first.module.scss
    | ├── first.types.ts
    | ├── first.context.ts
    | └── first.test.ts
    └── second
      ├── index.tsx
      ├── second.module.scss
      ├── second.types.ts
      ├── second.context.ts
      └── second.test.ts
```

В случай, если в страницу много секций. Создаем папку sections и туда помещаем first, second, third и тд
для декомпозиций страницы. После куски собираем в index файле. Так же можно index файл сделать public api

```
views
└── registration
  ├── index.ts
  ├── registration.module.scss
  ├── registration.types.ts
  ├── registration.context.ts
  ├── registration.test.ts
  └── registration.tsx
```

## Структура приложения

```

src
  ├── application ─ содержит настройку роутера, глобальные хранилища и стили.
  ├── processes ─ содержит часть аутентификации, отвечающую за чтение/запись токенов аутентификации.
  ├── views ─ содержит компоненты роутов на каждую страницу в приложении, преимущественно композирующие, по возможности, без собственной логики.
  ├── widgets ─ содержит "собранную" карточку поста, с содержимым и интерактивными кнопками, в которые вшиты запросы к бэкенду.
  ├── features ─ содержит всю интерактивность карточки (например, кнопку лайка) и логику обработки этой интерактивности.
  ├── entities ─ содержит скелет карточки со слотами под интерактивные элементы. Компонент, демонстрирующий автора поста, также находится в этой папке, но в другом слайсе.
  └── shared ─ максимально переиспользуемые компоненты(ui), helpers, constants без бизнес логики.

```

## Архитектура приложения

Используем архитектуру feature sliced design. У данной архитектуры есть своя документация. Вот ссылка https://feature-sliced.design/
можете ознакомится с данной архитектурой.

У нас в сегментах нет lib, у нас идут сегменты constants и helpers. Для типизаций и хуков сегменты types и hooks соответственно.
Так же возможно, что могут быть введены ещё какие-то сегменты.
