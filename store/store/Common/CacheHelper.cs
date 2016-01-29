using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Caching;



namespace store.Common
{
    public static class CacheHelper
    {
        static log4net.ILog log = log4net.LogManager.GetLogger(typeof(CacheHelper));
        public static bool CheckCacheStatus(string key)
        {
            return HttpContext.Current.Cache.Get(key) != null;

        }

        public static bool Put<T>(string key, T value)
        {
            try
            {
                HttpContext.Current.Cache.Insert(key, value);

                return true;
            }
            catch (Exception e)
            {
                log.Error(e.Message);
                throw;
            }
        }

        public static T GetCacheList<T>(string key) where T : class
        {
            try
            {
                if (HttpContext.Current.Cache.Get(key) == null)
                {
                    return null;
                }

                var result = HttpContext.Current.Cache.Get(key) as T;
                return result;
            }
            catch (Exception e)
            {

                log.Error(e.Message);
                throw;
            }
        }

        public static bool Remove(string key)
        {
            try
            {
                if (HttpContext.Current.Cache.Get(key) != null)
                {
                    HttpContext.Current.Cache.Remove(key);
                }
                return true;
            }
            catch (Exception e)
            {
                
                log.Error(e.Message);
                throw;
            }
        }
    }
}