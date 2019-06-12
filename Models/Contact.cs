using System;
namespace core_react_redux.Models
{
    public class Contact
    {
        public Contact(int contactId, string firstName, string lastName, string email, string phone)
        {
            ContactId = contactId;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Phone = phone;
        }
        public int ContactId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
