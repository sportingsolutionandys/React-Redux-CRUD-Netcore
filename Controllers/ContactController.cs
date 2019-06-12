using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using core_react_redux.BusinessLogic;
using core_react_redux.DataAccess;
using core_react_redux.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace core_react_redux.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        private IHandler<Contact> _contactHandler;

        public ContactController(IHandler<Contact> contactHandler) 
        {
            _contactHandler = contactHandler;
        }

        // GET: api/contact
        [HttpGet]
        public IEnumerable<Contact> Get()
        {
            return _contactHandler.GetAll();
        }

        // GET api/contact/5
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contactHandler.GetById(id);
        }

        // POST api/contact
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _contactHandler.Add(contact);
        }

        // PUT api/contact/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Contact contact)
        {
            _contactHandler.Update(id, contact);

        }

        // DELETE api/contact/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _contactHandler.Delete(id);
        }
    }
}
