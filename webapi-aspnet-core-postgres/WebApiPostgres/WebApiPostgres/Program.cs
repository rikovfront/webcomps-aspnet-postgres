using Microsoft.EntityFrameworkCore;
using WebApiPostgres.Models;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("*").WithHeaders("*").WithMethods("*");
                      });
});

builder.Services.AddControllers(options =>
{
    options.RespectBrowserAcceptHeader = true;
});

builder.Services.AddDbContext<DevContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DevContext")));

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();

