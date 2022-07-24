using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities;

namespace Canteen_2022.Entities;

public class CalendarItem : BasicAggregateRoot<Guid>, IHasCreationTime
{
    public DateTime CreationTime { get; set; }
    public DateTime Date { get; set; }
    public string Test { get; set; }
}
