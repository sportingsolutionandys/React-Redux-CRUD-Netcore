using System;
using System.Collections.Generic;
using core_react_redux.Models;

namespace core_react_redux.DataAccess
{
    //Implemenatation of db methods for Contact repository
    public class ContactRepository : IRepository<Contact>
    {
        private IDBContext<Contact> _dbContext;
        public ContactRepository(IDBContext<Contact> dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Contact> GetAll()
        {
            return _dbContext.GetAll();
        }

        public Contact GetById(int id)
        {
            return _dbContext.GetById(id);
        }

        public void Update(Contact contact)
        {
            _dbContext.Update(contact);

        }

        public void Add(Contact contact) 
        {
            _dbContext.Add(contact);

        }

        public void Delete(int id)
        {
            _dbContext.Delete(id);
            
        }

    }
}
