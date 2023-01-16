function verification() { 
    var nom = document.form.nom.value; 
    var prenom = document.form.prenom.value; 
    var date=document.form.date.value; 
    var email=document.form.email.value; 

    if(nom=="") {
        alert('Ajouter votre Nom !\n');
        document.form.nom.focus(); 

    } 

  if(prenom=="") {
        alert('Ajouter votre Prénom !\n');
        document.form.prenom.focus(); 
    } 
    if(date=="") {
        alert('Ajouter La Date !\n');
        document.form.date.focus(); 
        
    } 
    if(email=="") {
        alert('Ajouter un email !\n');
        document.form.email.focus(); 
        
    } 
 }
 