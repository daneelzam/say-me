import mongoose from 'mongoose';
import Advices from './Advices.js';

// const global = 'mongodb+srv://admin:admin@cluster0.t49xt.mongodb.net/say_me';
const local = 'mongodb://localhost:27017/tellme';

mongoose.connect(local, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const advises = [{
  name: 1,
  text: 'Antispasmodics will help to remove unpleasant sensations.',
},
{
  name: 2,
  text: '30-50 g of mulled wine from a good red wine will help to relieve stress.',
},
{
  name: 3,
  text: 'It is advisable to refrain from sex.',
},
{
  name: 4,
  text: 'At this time, physical activity is contraindicated.',
},
{
  name: 5,
  text: 'It is not superfluous to include iron-containing foods in the diet.',
},
{
  name: 6,
  text: 'If you want to lose weight,start doing it today.',
},
{
  name: 7,
  text: 'This day is simply created for studying and career growth.',
},
{
  name: 8,
  text: "It's time to make a beauty plan for the next week.",
},
{
  name: 9,
  text: "If you dream of having a baby girl, it's your time!",
},
{
  name: 10,
  text: 'Experiment with flavors and cook more.',
},
{
  name: 11,
  text: 'Time for creativity.',
},
{
  name: 12,
  text: 'The use of perfumes can weaken your attractiveness to the stronger sex.',
},
{
  name: 13,
  text: "It's time to go on a date.",
},
{
  name: 14,
  text: 'There is a high probability of conception of twins.',
},
{
  name: 15,
  text: 'Get plenty of rest.',
},
{
  name: 16,
  text: 'Be careful with the carbohydrates.',
},
{
  name: 17,
  text: 'Try to enrich your diet with coarse fiber, fermented milk products.',
},
{
  name: 18,
  text: 'Try to increase the proportion of vegetable fats.',
},
{
  name: 19,
  text: 'Fill the dawn hours with passion and tenderness.',
},
{
  name: 20,
  text: 'From this day, relatively safe days for fertilization begin.',
},
{
  name: 21,
  text: "If you're trying to get pregnant and want to confirm that you've ovulated, this is the perfect time for your doctor to check to see if your progesterone is elevated.",
},
{
  name: 22,
  text: 'These days, we become impenetrable to stressful situations.',
},
{
  name: 23,
  text: 'These days, you need to pay more attention to your diet and proper facial cleansing.',
},
{
  name: 24,
  text: 'The greatest number of injuries, especially related to sports, women receive on these days.',
},
{
  name: 25,
  text: "This will probably be your worst PMS day. And don't be surprised if running out of ketchup brings on unexpected weeping.",
},
{
  name: 26,
  text: 'The miracle cure these days can be sex and chocolate.',
},
{
  name: 27,
  text: 'Get excited: PMS symptoms are winding down.',
},
{
  name: 28,
  text: "This is about the time that your cycle comes to an end. If you're not pregnant, your period is on its way.",
}];

async function seeder() {
  for (let i = 0; i < advises.length; i++) {
    const advice = new Advices({
      name: advises[i].name,
      text: advises[i].text,
    });
    await advice.save();
  }
}

seeder().then(() => console.log('ok'))
  .catch(() => console.log('bad'));
