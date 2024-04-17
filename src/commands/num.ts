import { Context } from 'telegraf';
import { getNumberInfo } from '../utils';

const num = () => async (ctx: Context) => {
  const message = ctx.text ? ctx.text : 'No message';
  //extract the number from the message
  const num = message.split(' ')[1];
  //send the number to the API
  const response = await getNumberInfo(num);
  console.log(response);
  ctx.replyWithMarkdownV2(
    '```json\n' + JSON.stringify(response, null, 2) + '\n```',
    {
      parse_mode: 'Markdown',
    },
  );
};

export { num };
