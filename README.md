Области хранения данных:
-бд на json-server
-bff
-redux store

Сущности приложения:
-пользователь: БД (список пользователей), bff (сессия текущего пользователя), стор (отображение в браузере)
-роль пользователя: БД (список ролей), bff (сессия), стор (использование в браузере)
-статья: БД (список статей), стор (отображение в браузере)
-комментарий: БД (список комментариев), стор (отображение в браузере)

Таблицы БД:
-пользователи - users: id / login / password / registed_at / role_id
-роли - roles: id / name
-статьи - posts: id / title / image_url / content / published_at
-комментарии - comments: id / author_id / post_id / content

Схема состояния на bff:
-сессия текущего пользователя: login / password / role

Схема для redux store (на клиенте):
-user: id / login / roleId
-posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
-users: массив user: id / login / registeredAt / role