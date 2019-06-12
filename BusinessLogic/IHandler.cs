using System;
using System.Collections.Generic;

namespace core_react_redux.BusinessLogic
{
    public interface IHandler<T>
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Add(T add);
        void Update(int id, T update);
        void Delete(int id);
    }
}
