using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace store.Models
{
    [Table("customer")]
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int customerId { get; set; }

        public Customer() 
        {
            this.customerUID = System.Guid.NewGuid().ToString("N");
        }

        public string customerUID { get; set; }

        public string phoneNumber { get; set; }

        //[MinLength(6)]
        //public string password { get; set; }




        public virtual ICollection<Address> addresses { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }

    }
}