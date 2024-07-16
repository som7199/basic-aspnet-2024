﻿using BasicDBHandling.Models;
using Microsoft.EntityFrameworkCore;

namespace BasicDBHandling.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            // 내용 무,,
        }

        // CodeFirst로 만들어둔 엔티티클래스를 작성
        // 테이블 생성할 엔티티가 늘 때마다 여기에 추가해야 함!!!
        public DbSet<Category> Categories { get; set; }
    }
}
