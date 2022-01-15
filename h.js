var htmlfile = WSH.CreateObject('htmlfile'), JSON;
htmlfile.write('<meta http-equiv="x-ua-compatible" content="IE=9" />');
htmlfile.close(JSON = htmlfile.parentWindow.JSON);
function includeFile(filename)
{
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var fileStream = fso.openTextFile(filename);
  var fileData = fileStream.readAll();
  fileStream.Close();
  return fileData;
}
