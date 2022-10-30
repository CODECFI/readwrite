const fspromises = require('fs').promises;
const path = require('path');

const contents = async () => {

try{
  const data = await fspromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
  console.log(data);
  await fspromises.writeFile(path.join(__dirname, 'Write.txt'), data);

}catch (err){
  console.error(err);

  };

};

contents();