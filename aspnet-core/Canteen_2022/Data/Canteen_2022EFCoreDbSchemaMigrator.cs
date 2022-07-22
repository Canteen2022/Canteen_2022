using Microsoft.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;

namespace Canteen_2022.Data;

public class Canteen_2022EFCoreDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public Canteen_2022EFCoreDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the Canteen_2022DbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<Canteen_2022DbContext>()
            .Database
            .MigrateAsync();
    }
}
