using System;
using System.Collections.Generic;
using System.Linq;
using core_react_redux.DataAccess;
using core_react_redux.Models;

namespace core_react_redux.BusinessLogic
{
    public class ContactHandler : IHandler<Contact>
    {
        private IRepository<Contact> _contactRepository;

        public ContactHandler(IRepository<Contact> contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public IEnumerable<Contact> GetAll()
        {
            return _contactRepository.GetAll();
        }

        public Contact GetById(int id)
        {
            return _contactRepository.GetById(id);
        }

        public void Add(Contact contact)
        {
            //Here we want to check fields are valid
            //Could use a seperate validator class

            //In particular email address doesnt already exist
            var emailExists = _contactRepository.GetAll().Any(x => x.Email == contact.Email);
            if (!emailExists) 
            {
                _contactRepository.Add(contact);
            }

        }


        public void Update(int id, Contact contact)
        {
            //Check first if id is relvant
            _contactRepository.GetById(id);
            //Do any validation before updating
            _contactRepository.Update(contact);
        }

        public void Delete(int id)
        {
            _contactRepository.Delete(id);
        }
    }
}
