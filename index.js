const express = require('express');
 app = express();

 app.listen(() => console.log('done !'));

 app.use('/ping', (req, res) => {
     res.send(new Date());
 }); 

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);

const Discord = require('discord.js');
const { Client, MessageActionRow, MessageButton, Modal, MessageButtonStyle, TextInputComponent, TextInputStyle, Permissions } = require('discord.js');
const client = new Discord.Client({ intents: [new Discord.Intents(32767)] });
const { Intensts, MessageEmbed, Collection, Collector, Formatters, MessageSelectMenu, Intents, MessageAttachment } = require('discord.js');
var cooldown = new Set()
const { ButtonBuilder, ButtonStyle, Events, ActionRowBuilder } = require('discord.js');
const mongoose = require("mongoose");
const nodeevent = require('node:events');
const ms = require("ms")
const moment = require("moment")
const guild = require('guild');
const request = require('request');
const prefix = "-"  
const wait = require('node:timers/promises').setTimeout;

const line = ""; // رابط خطك

//

client.login(process.env.token)


client.on("messageCreate", async interaction => {
if (interaction.content.startsWith(prefix + 'S')){
  let embed = new Discord.MessageEmbed() 
      .setTitle("**جميع القوانين التابعة لـ سيرفر اولد لاو .**")
    .setDescription(`### نرجو منك إتباع جميع القوانين لكي لايتم محاسبتك .`)
      .setColor("#e67e22")
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    	.setAuthor(`${interaction.guild.name}`,interaction.guild.iconURL({dynamic:true}))     
  .setImage("https://cdn.discordapp.com/attachments/1188885598484832437/1228522760607633408/a.png?ex=662c59fa&is=6619e4fa&hm=e78a860ab0ec2ff18417a394cff9be7c8a73fda9ef1be36ba8d60d575325fbb1&")
   .setFooter(`Developer Development For OldLaw`, 
interaction.guild.iconURL({dynamic:true})) 

  
const menu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
                    
         .setCustomId('menu_guide') 
         .setPlaceholder('يرجى الاختيار .')

         .addOptions([
                      
                        {
             label: 'القوانين العامة .',
                              description: ' ',
             emoji: `<:OLRP:1228451585143738458>`,
             value: '1',
                        },
                        {              
                      
             label: 'آلية التحذيرات',
                              description: '',
             emoji: `<:OLRP:1228451585143738458>`,
             value: '2',
                        },      
             {              
                      
             label: 'قوانين الآجرام .',
                              description: '',
             emoji: `<:OLRP:1228451585143738458>`,
             value: '3',
                        },      
             {              
                      
             label: 'القوانين المطاعم .',
                              description: '',
             emoji: `<:OLRP:1228451585143738458>`,
             value: '4',
                        },      
             {              
                      
             label: 'القوانين الدسكورد .',
                              description: ' ',
             emoji: `<:OLRP:1228451585143738458>`,
             value: '5',
                        },               
                    ]),
        );
    interaction.channel.send({
      embeds: [embed], components: [menu]}).then(m => {
      interaction.delete()
      })
}
}) 
client.on("interactionCreate", async interaction => {
    if (!interaction.isSelectMenu()) return;

  let embed1 = new Discord.MessageEmbed() 
      .setColor("#e67e22") 
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    	.setAuthor(` ${interaction.guild.name}`,interaction.guild.iconURL({dynamic:true}))     
.setDescription(`# - General laws
**

1- يجب عليك فهم معنى RP بقياسه الحياه الواقعيه

‏2- (RDM) هو القتل العشوائي ويعرضك الى (باند نهائي)

‏3- (VDM) دهس الاشخاص بطريقه عشوائية يعرضك الى تحذير اول بحيث انك تستخدم المركبه كسلاح للقتل

4- يجب عليك تقدير حياتك والخوف عليها

5- يجب التصرف وفق الشخصيه وتقمصها

6- في حال إنشاء شخصيه اخرى يمنع وجود اي تشابه بالشخصيه الثانيه أي (شعر الرأس او شعر الوجه او العيون)

7- يمنع منعاً باتاً استخدام اي ثغره او الغش داخل السيرفر ويعرضك الى (باند نهائي)

8-في حال حدوث مخالفه امامك يجب عليك الانسحاب من الموقع وتبلغ الاداره بالمخالفه والايدي الخاص بالمخالف، في حال الكذب ستتم محاسبتك محاسبه قصوى وبشكل مباشر

9- في حال كنت اعزل وتم تهديدك بسلاح ناري او ابيض يجب عليك الخوف على حياتك

10- يجب ان يكون اسم الشخصيه واقعي

11- يمنع استخدام الاسلحه الغير الواقعيه والمتفجره

12- اثناء اختيار ملامح الشخصيه يمنع اختيار ملامح غير واقعيه

13- استخدام اسلحه واغراض ليست بالحقيبه يعرضك للمسائله والمحاسبه

14- يمنع تقليد الكركترات والاسماء الموجوده بالسيرفر

15- يمنع دخول البيت او الشقه اثناء سيناريو قائم

16- يمنع لبس الملابس العسكريه والجيشية ومن ضمنها البطاقات والحزام العسكري

17 - تمنع الشخصنه بجميع اشكالها وانواعها

18- عدم ترابط شخصيتك الاولى بالشخصيه الثانيه أي ( ولد عمي ، ولد عمك ، انا اعرف ولد عمك)
يجب عليك تسمية كل شي بأسم كركتره
(يمنع تكرار الاسامي بين الكركترات)

19- يجب عليك تقمص شخصيتك مع الكل حتى لو خويك مجرم ماتتساهل معه ابدا وتعامله بشكل جدي او العكس اذا كنت مجرم

20- يمنع على الشخص الميت أثناء سيناريو العوده إليه مره اخرى

21- يمنع على المسعفين التواجد في مواقع اطلاق النار الا بعد التأكد التام من وقف النار

22- يمنع نقل الاموال والاغراض بين
شخصياتك

23- يمنع التواصل الغير الشرعي مع اي لاعب اخر في برنامج اثناء تواجدكم داخل السيرفر ( Meta Gaming )

24- استخدام معلومه ما اخذتها داخل السيرفر، سواء كانت من الدسكورد ،تويتش او برنامج اخر يعرضك الى المحاسبه القصوى

25- يمنع الستريم سنايب (باند نهائي)

26- يجب عليك الخوف على ممتلكاتك ومركباتك وعدم التهور بالقياده والسرعه دون وجود سبب

27- يمنع القفز بالسيارات في جميع الحالات

28- خروجك من السيرفر اثناء سيناريو جاري سيعرضك للمحاسبه

29- في حال تم اسقاطك تنسى اخر 10 دقايق بما فيها من اسقطك

30- يمنع الكذب بـ ( سحر او صداع او باخذ حبه او الخ ... يعرضك للمحاسبه القصوى)

31- يمنع التحدث خارج الرول بلاي ويعرضك الى (باند نهائي)

32- في حال خروجك من السيرفر بحسابك بالدسكورد لن تتم اعاده لك رتبك السابقه بما فيها رتب التفعيل**`)
   .setTimestamp()
   .setFooter(`Developer Development For OldLaw .`, interaction.guild.iconURL({dynamic:true})) 

let embed2 = new Discord.MessageEmbed() 
      .setColor("#e67e22") 
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    	.setAuthor(` ${interaction.guild.name}`,interaction.guild.iconURL({dynamic:true}))     
   .setDescription(`# - الية التحذيرات والباندات
### Warn and Banned System
**

1- <@&1222699501458821121>  ( Banned 1 Day)

2- <@&1222699500876070984>  ( Banned 3 Days )

3- <@&1222699499235836065>  ( Banned 7 Days + reavtive )

4- <@&1222699503576940646>  ( نهائي مع احقية طلب فرصة عند مرور كل شهر )

<:OLRP:1228450574865793155> الية ازاله التحذيرات
**
1 - بعد مرور كل اسبوع سيتم ازاله تحذير
**فية حال دعمة <@&1222699429509992548>  يكون كل 3 ايام !!!**`)
   .setTimestamp()
   .setFooter(`Developer Development For OldLaw .`, interaction.guild.iconURL({dynamic:true})) 

let embed3 = new Discord.MessageEmbed() 
      .setColor("#e67e22") 
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    	.setAuthor(` ${interaction.guild.name}`,interaction.guild.iconURL({dynamic:true}))     
   .setDescription(`# - Criminal laws

**
1- يمنع الاتفاق مع اي شخص ليصبح رهينة

2- يمنع طلب تاكسي او عسكري او محامي وخطفه

3-مدة رهن الرهينة (20 د) الا في حال بدأ السرقه او السيناريو يلغى الوقت

4- يمنع سرقة المواطن الا بسبب وجود عداوه سواء كان رهينه او غيره

5- يمنع طلب اكثر من 1500 دولار على الرهينة

6- حد المجموعات او العائلات او المسموح فقط 7 اشخاص

7- الحد الاقصى للعصابه داخل القيم 8 (لا يوجد حد معين للعصابه خارج القيم)

8- يمنع الاعتداء على مفاوض الشرطه ومفاوض المجرمين خلال التفاوض ويجب عليك التفاوض بجديه

9- يمنع مقاومة السلاح الناري بسلاح ابيض مهما كانت الحاله

10- يمنع اطلاق النار او خطف العسكري في اي قضية مروريه

11- يُمنع على إي فرد او جماعة السرقة ثم الانتظار لفترة في نفس الموقع سواء للتفاوض او غيره او الانتظار خارج الموقع ثم المعاودة وسرقة الموقع مره آخرى.

12- يمنع منعاً باتاً مشاركة الرهينة للخاطفين في منتصف السيناريو

13- يمنع تقليد ملابس احد العصابات

14- يمنع الخطف والتهديد في حال وجود مواطن او اثنين من المدنيين او اكثر

15- يجب عليك تعيين التدخل الخارجي قبل الابتداء بالسرقة

16- يمنع خطف مواطن لأجل طلب اخراج شخص من السجن

17- يسمح بطلب واحد لكل رهينه ( يمنع طلب طلبين للرهينه الواحده)

18- يمنع تحالف عصابتين على عصابه اخرى
**
\`\`\`\ تسلسل السرقات :

Store Robbery (1-4)
House Robbery (2-5)
Jewelery Robbery (3-7)
Art gallery robbery:(3-8)
Paleto bank:(6-11)
Pacific bank:(7-11)\`\`\`\ `) 
   .setTimestamp()
   .setFooter(`Developer Development For OldLaw .`, interaction.guild.iconURL({dynamic:true})) 

let embed4 = new Discord.MessageEmbed() 
      .setColor("#e67e22") 
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    	.setAuthor(` ${interaction.guild.name}`,interaction.guild.iconURL({dynamic:true}))     
   .setDescription(`# - Restaurant laws
**
1 - واجب على جميع المواطنين احترام المطاعم بشكل كامل وتقدير الموظفين اثناء عملهم وعدم الاسائه لهم بكل الطرق

2 - يجب على الجميع التقيد باسعار الوجبات وعدم الاصرار والمفاوضة وازعاج الموظفين

3 - يمنع منعا باتا لبس ملابس موظفين المطاعم والتحايل بكونك موظف فالمطعم

4 - يمنع منعا باتا الوقوف بشكل خاطئ في مواقف المطاعم ويجب الالتزام بالمواقف المحدده للمطعم ويحق للموظف ابلاغ الشرطة وعدم البيع

5 - يجب على الجميع احترام المطعم والوقوف بشكل منظم لحصولك على الطعام

6 - اسعار الوجبات قابلة للتغير بشكل مستمر ويجب عليك الاطلاع بشكل دوري

7 - البيع فقط داخل المطاعم ولايحق للمواطن طلب وجبات خارج المطعم

8 - يمنع منعا باتا سرقة موظفين المطاعم واخذ وجباتهم

9 - يمنع منعا باتا في حال لست موظف التجارة بوجبات المطاعم والبيع والشراء

10 - يمنع خطف موظفين المطاعم في اوقات عملهم الرسمية ويندرج تحت ذلك ( عربة بيع الطعام )**`)
   .setTimestamp()
   .setFooter(`Developer Development For OldLaw .`, interaction.guild.iconURL({dynamic:true})) 

let embed5 = new Discord.MessageEmbed() 
      .setColor("#e67e22") 
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    	.setAuthor(` ${interaction.guild.name}`,interaction.guild.iconURL({dynamic:true}))     
   .setDescription(`# - Discord rules
**
1- احترام الجميع و عدم السب و اهانة اي شخص مهما كانت الظروف ولو بطريقة غير مباشرة

2- عدم وضع الروابط او وضع روابط تحتوي دعوات لسيرفرات اخرى

3- عدم التدخل في شؤون الاخرين او شخصنة الحوارات

4- عدم الخوض بالامور الدينية او السياسية او التطرق لها بأي شكل من الاشكال

5- يمنع انتحال الشخصيات الإدارية ومن يخالف القانون هذا سوف يتبند

6- يمنع السخرية والإستهزاء من الآخرين ، وسيتم منعه من الكتابة بجميع الشاتات واذا تكرر الامر قد تصل
الى التحذير

7- يمنع الاستفسار بالشات العام ، عندك استفسار او سؤال توجه الى الدعم الفني ( في حال انك خالفت سيتم إعطائك ميوت )**`)
   .setTimestamp()
   .setFooter(`Developer Development For OldLaw .`, interaction.guild.iconURL({dynamic:true}))    

if (interaction.customId === "menu_guide"){
  
      if (interaction.values[0] === '1'){
   interaction.reply({contnet:`For While.`, embeds: [embed1], ephemeral:true})
  } 
  
if (interaction.values[0] === '2'){
 interaction.reply({contnet:`For While.`, embeds: [embed2], ephemeral:true})
}

if (interaction.values[0] === '3'){
 interaction.reply({contnet:`For While.`, embeds: [embed3], ephemeral:true})
}

  if (interaction.values[0] === '4'){
 interaction.reply({contnet:`For While.`, embeds: [embed4], ephemeral:true})
}
  
if (interaction.values[0] === '5'){
 interaction.reply({contnet:`For While.`, embeds: [embed5], ephemeral:true})
}   
   } 
});
