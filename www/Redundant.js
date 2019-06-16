// g: im just going to zombie out and move this; since you say it was a planed feutre(and it cause some bugs that cause the browers to freez) that got droped. shoult be to hard to put back in
// g: also most of this would be esay if done with a HTML form passed into node

/*
if(settings.schedule=='Schedule unset' || settings.startDate=='Unset') {
  //function showSettings() {

  var settingsDiv=document.getElementById('settings');
  settingsDiv.style.display='';
  settingsDiv.innerHTML='';

  var settings=getSettings();

  var label=document.createElement('span');
  settingsDiv.appendChild(label);
  label.innerHTML='Schedule: ';
  var select=document.createElement('select');
  settingsDiv.appendChild(select);
  select.addEventListener('change', setSettings.bind(undefined, settingsDiv));

  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Mono';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='E1';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Segmented';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Siesta';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='E2';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='E3';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='E4';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='E5';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Trimaxion';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Bimaxion';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='DC1';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='DC2';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='DC3';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='DC4';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='TC1';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='TC2';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Triphasic';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='SEVAMAYL';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Dymaxion';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Naptation';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='SPAMAYL';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Tesla';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='Uberman';
  option.innerHTML=option.value;
  if(settings.schedule)
  {
    var options=select.getElementsByTagName('option');
    for(var i=0; i<options.length; i++)
    {
      if(options[i].value==settings.schedule)
      {
        select.selectedIndex=i;
        break;
      }
    }
  }

  var select=document.createElement('select');
  settingsDiv.appendChild(select);
  select.addEventListener('change', setSettings.bind(undefined, settingsDiv));

  var option=document.createElement('option');
  select.appendChild(option);
  option.value='';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='shortened';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='extended';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='flipped';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='modified';
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value='recovery';
  option.innerHTML=option.value;
  if(settings.modifier)
  {
    var options=select.getElementsByTagName('option');
    for(var i=0; i<options.length; i++)
    {
      if(options[i].value==settings.modifier)
      {
        select.selectedIndex=i;
        break;
      }
    }
  }
*/

// g: the perpouse of this should be decribed

  /*var input=document.createElement('input');
  settingsDiv.appendChild(input);
  input.placeholder='Schedule';
  if(settings.schedule!='Schedule unset')
    input.value=settings.schedule;
  input.addEventListener('change', setSettings.bind(undefined, settingsDiv));
  input.addEventListener('keyUp', setSettings.bind(undefined, settingsDiv));



  settingsDiv.appendChild(document.createElement('br'));

  var label=document.createElement('span');
  settingsDiv.appendChild(label);
  label.innerHTML='Start date: ';
  var input=document.createElement('input');
  settingsDiv.appendChild(input);
  input.type='date';
  if(settings.startDate!='Unset')
    input.value=settings.startDate;
  input.addEventListener('change', setSettings.bind(undefined, settingsDiv));
  input.addEventListener('keyUp', setSettings.bind(undefined, settingsDiv));
  settingsDiv.appendChild(document.createElement('br'));

  var label=document.createElement('span');
  settingsDiv.appendChild(label);
  label.innerHTML='Monophasic hours sleep required: ';
  var input=document.createElement('input');
  input.type='number';
  input.max="24";
  input.min="0";
  input.style.width='5em';
  settingsDiv.appendChild(input);
  if(settings.monosleep)
    input.value=settings.monosleep;
  input.addEventListener('change', setSettings.bind(undefined, settingsDiv));
  input.addEventListener('keyUp', setSettings.bind(undefined, settingsDiv));
  settingsDiv.appendChild(document.createElement('br'));

  var label=document.createElement('span');
  settingsDiv.appendChild(label);
  label.innerHTML='Adapted';
  var a=document.createElement('a');
  label.appendChild(a);
  a.innerHTML='[?]';
  a.href='javascript:void(0);';
  a.addEventListener('click', showAdaptCriteria);
  label.appendChild(document.createTextNode(': '));
  var input=document.createElement('input');
  input.type='checkbox';
  settingsDiv.appendChild(input);
  if(settings.adapted)
  {
    input.checked=true;
  }
  input.addEventListener('change', setSettings.bind(undefined, settingsDiv));
  settingsDiv.appendChild(document.createElement('br'));

  var label=document.createElement('span');
  settingsDiv.appendChild(label);
  label.innerHTML='Reminder to do tests: ';
  var select=document.createElement('select');
  select.addEventListener('change', setSettingsAndReload.bind(undefined, settingsDiv));
  settingsDiv.appendChild(select);
  var option=document.createElement('option');
  select.appendChild(option);
  option.value="Never";
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value="Weekly";
  option.innerHTML=option.value;
  var option=document.createElement('option');
  select.appendChild(option);
  option.value="Daily";
  option.innerHTML=option.value;
  if(settings.reminder)
  {
    var options=select.getElementsByTagName('option');
    for(var i=0; i<options.length; i++)
    {
      if(options[i].value==settings.reminder)
      {
        select.selectedIndex=i;
        break;
      }
    }
  }

  var span=document.createElement('span');
  settingsDiv.appendChild(span);
  var select=document.createElement('select');
  select.addEventListener('change', setSettingsAndReload.bind(undefined, settingsDiv));
  span.appendChild(document.createTextNode(' on '));
  span.appendChild(select);
  var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for(var i=0; i<days.length; i++)
  {
    var option=document.createElement('option');
    select.appendChild(option);
    option.value=days[i];
    option.innerHTML=option.value;
  }
  if(settings.reminderDay)
  {
    var options=select.getElementsByTagName('option');
    for(var i=0; i<options.length; i++)
    {
      if(options[i].value==settings.reminderDay)
      {
        select.selectedIndex=i;
        break;
      }
    }
  }

  if(settings.reminder!="Weekly")
  {
    span.style.display='none';
  }

  var span=document.createElement('span');
  settingsDiv.appendChild(span);
  var input=document.createElement('input');
  input.addEventListener('change', setSettings.bind(undefined, settingsDiv));
  input.addEventListener('keyUp', setSettings.bind(undefined, settingsDiv));
  span.appendChild(document.createTextNode(' at '));
  span.appendChild(input);
  input.type='time';
  input.value='12:00';
  if(settings.reminderTime)
  {
    input.value=settings.reminderTime;
  }

  if(settings.reminder!="Weekly" && settings.reminder!="Daily")
  {
    span.style.display='none';
  }

  settingsDiv.appendChild(document.createElement('br'));

  var a=document.createElement('a');
  settingsDiv.appendChild(a);
  a.innerHTML='Test reminder (in 10 seconds)';
  a.href='javascript:void(0);';
  a.addEventListener('click', testNotify);
  settingsDiv.appendChild(document.createElement('br'));

  var a=document.createElement('a');
  settingsDiv.appendChild(a);
  a.innerHTML='Clear all test scores';
  a.href='javascript:void(0);';
  a.addEventListener('click', clearTest.bind(undefined, a));
  settingsDiv.appendChild(document.createElement('br'));

  var a=document.createElement('a');
  settingsDiv.appendChild(a);
  a.innerHTML='Close';
  a.style.fontSize='2em';
  a.href='javascript:void(0);';
  a.addEventListener('click', hide.bind(undefined, settingsDiv));
} */
