
              


function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
        
}



function uploadFiles(form) {

  try {
    
    var clipsv = "Upload";
    var folder, folders = DriveApp.getFoldersByName(clipsv);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(clipsv);
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);    
    file.setDescription("Uploaded by " + form.myName);
        
    return '<div class="cell"> <label>رابط الملف</label> <div class="input-control text full-size"> <input type="text" placeholder="Input you text here..." value="https://drive.google.com/open?id='+file.getId()+'" onmouseover="this.select()" onclick="this.select()"> </div> </div>';

  } catch (error) {
    
    return error.toString();
  }
  
}
