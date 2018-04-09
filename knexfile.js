module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie_CRUD_dev'
  },
  production: {
    client: 'pg',
    connection: 'postgres://evdtlsfjxtwkhz:7c256ada9f8d49b3075cf91979cd645438e1ae832efd171074d94c8a26ebc53e@ec2-54-235-109-37.compute-1.amazonaws.com:5432/d23qcegkvrp9md',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};