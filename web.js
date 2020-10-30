var selectedRow=null,
    Id=0;
class ContactList{
    constructor(name,email,phone) {
        this.id=Id++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class Contact{
    static displayemployee(){
    const StoreEmp=[];
    const contactlist= StoreEmp;
    contactlist.forEach((contac)=> Contact.AddEmployeeToList(contac));
   }


    static AddEmployeeToList(contactlist){
        const list=document.getElementById("contact_table_body");
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${contactlist.name}</td>
        <td>${contactlist.email}</td>
        <td>${contactlist.phone}</td>
        <td><a href="#" class="btn btn-success btn-sm edit">Edit</a></td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        `
        list.appendChild(row);
    }

    static editEmployeeToList(contactlist){
        selectedRow.children[0].textContent= contactlist.name;
        selectedRow.children[1].textContent= contactlist.email;
        selectedRow.children[2].textContent= contactlist.phone;
        document.getElementById("sumbit_btn").value="Submit";
        document.getElementById("sumbit_btn").classList="btn btn-success add-btn  sumbit_btn";
    }
    static deleteEmpyee(el){
        if(el.classList.contains("delete")){
            el.parentElement.parentElement.remove();
        }
        else{
            null;
        }
    }

    static editEmployee(el){
        if(el.classList.contains('edit')){
            selectedRow= el.parentElement.parentElement;
            document.getElementById("name").value= selectedRow.children[0].textContent;
            document.getElementById("email").value= selectedRow.children[1].textContent;
            document.getElementById("phone").value= selectedRow.children[2].textContent;
            document.getElementById("sumbit_btn").value="Update";
            document.getElementById("sumbit_btn").classList="btn btn-success add-btn  sumbit_btn";
        }else{null}
    }

 static clearFields() {
   document.getElementById('name').value = '';
   document.getElementById('email').value = '';
   document.getElementById('phone').value = '';
 }
}

document.getElementById('Contact_Form').addEventListener('submit', (e) => {
 e.preventDefault();
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const phone = document.getElementById('phone').value;
 const contactlist = new ContactList(name, email, phone);
 if (selectedRow == null) {
   Contact.AddEmployeeToList(contactlist);
   selectedRow = null;
  
 } 
 else {
   Contact.editEmployeeToList(contactlist);
   selectedRow = null;
   
 }
   Contact.clearFields();
});

document.getElementById('contact_table_body').addEventListener('click', (e) => {
 Contact.deleteEmpyee(e.target);
 Contact.editEmployee(e.target);
});
















