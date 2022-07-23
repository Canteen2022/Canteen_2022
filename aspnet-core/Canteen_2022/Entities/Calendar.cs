using Volo.Abp.Domain.Entities;

namespace Canteen_2022.Entities;

public class CalendarItem : BasicAggregateRoot<Guid>
{
    public DateTime Date { get; set; }
}
