using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace store.Models
{
    [Table("address")]
    public class Address
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int addressId { get; set; }

        public Address()
        {
            this.isDefault = false;
        }

        public int customerId { get; set; }
        [ForeignKey("customerId")]
        public virtual Customer customer { get; set; }

        public string Receiver { get; set; }

        public string location { get; set; }

        public string phoneNumber { get; set; }

        public bool isDefault { get; set; }
    }
}