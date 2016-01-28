using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace store.Models
{
    [Table("Rating")]
    public class Rating
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ratingId { get; set; }

        public int productId { get; set; }
        [ForeignKey("productId")]
        public virtual Product product { get; set; }

        public int mark { get; set; }

        public DateTime DateCreated { get; set; }

        public int customerId { get; set; }
        [ForeignKey("customerId")]
        public virtual Customer customer { get; set; }
    }
}