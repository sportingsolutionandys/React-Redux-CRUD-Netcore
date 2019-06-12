using System;
using System.Collections.Generic;
using System.Linq;
using core_react_redux.Models;

namespace core_react_redux.DataAccess
{
    //This is acting as a dummy database context with some example contact details
    public class DBContext: IDBContext<Contact>
    {
        private List<Contact> contacts;

        public DBContext()
        {
            contacts = new List<Contact>(){
                new Contact(1,"Martin", "Smith","msith@gmail.com", "075665544"),
                new Contact(2,"John", "Wood","jwoood@gmail.com", "075565544"),
                new Contact(3,"Michelle", "White","mwhite@gmail.com", "0755653222")
            };
        }

        public IEnumerable<Contact> GetAll() 
        {
            return contacts;
        }

        public Contact GetById(int id) 
        {
            return contacts.FirstOrDefault(x => x.ContactId == id);
        }

        public void Add(Contact contact) 
        {
            //manually set the contact id
            contact.ContactId = contacts.Count + 1;
            contacts.Add(contact);
        }

        public void Update(Contact update) 
        { 
            //update existing item
        }

        public void Delete(int id) 
        { 
            //Delete existing item
        }
    }
}
