using System;
using System.Collections.Generic;

namespace core_react_redux.DataAccess
{
    public interface IRepository<T>
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Add(T add);
        void Update(T update);
        void Delete(int id);

    }
}
