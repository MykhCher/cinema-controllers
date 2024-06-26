const chalk = require('chalk');

module.exports = (req, res, next) => {
    const date = new Date();
    const seconds = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();
    const minutes = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
    const hours = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
    const month = (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);

    const curDatetime = `${date.getDate()}/${month}/${date.getFullYear()} ${hours}:${minutes}:${seconds}`
    res.on('finish', () => {
        const code = res.statusCode < 399 ? chalk.green(res.statusCode) : chalk.red(res.statusCode);
        console.log(`${chalk.blue(curDatetime)} => ${req.method} ${code} ${req.baseUrl}${req.url}`);
      })
    next();
}