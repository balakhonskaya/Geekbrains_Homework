

 console.log('Задание 1, 2');
 var str1 = '\'Ain\'t nobody loves me better\' - sings a singer. \'Makes me happy, Makes me feel this way. Ain\'t nobody loves me better then you.\'';
 console.log(str1);
 var str2 = str1.replace(/\'/g,'\"')
 console.log(str2);
 var srt3 = str2.replace(/(\w)"(\w)/g,'$1\'$2');
 console.log(srt3);
