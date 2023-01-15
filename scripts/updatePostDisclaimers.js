require('dotenv').config();

const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

(async function () {
  const spc = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
  const env = await spc.getEnvironment('master');
  const res = await env.getEntries({
    limit: 200,
    content_type: 'blogPost',
    'metadata.tags.sys.id[nin]': 'inside-resolve,customer-stories',
  });

  let counter = 0;
  let total = res.items.length;

  for (let item of res.items) {
    if (!item.isPublished()) continue;

    item.fields.disclaimer = { 'en-US': true };

    await item.update().then(item => item.publish());

    console.clear();
    console.log(`${++counter} of ${total} updated`);
  }
})()
  .then(x => x && console.log(x))
  .catch(console.error);
