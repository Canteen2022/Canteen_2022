using Canteen_2022.Entities;
using Canteen_2022.Services.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Canteen_2022.Services;

public class CalendarService : ApplicationService
{
    private readonly IRepository<CalendarItem, Guid> _calendarItemRepository;
    
    public CalendarService(IRepository<CalendarItem, Guid> calendarItemRepository)
    {
        _calendarItemRepository = calendarItemRepository;
    }
    
    public async Task<List<CalendarItemDto>> GetListAsync()
    {
        var items = await _calendarItemRepository.GetListAsync();
        return items
            .Select(item => new CalendarItemDto
            {
                Id = item.Id,
                Date = item.Date
            }).ToList();
    }

    public async Task<CalendarItemDto> CreateAsync(DateTime date)
    {
        var calendarItem = await _calendarItemRepository.InsertAsync(
            new CalendarItem {Date = date}
        );

        return new CalendarItemDto
        {
            Id = calendarItem.Id,
            Date = calendarItem.Date
        };
    }


    public async Task DeleteAsync(Guid id)
    {
        await _calendarItemRepository.DeleteAsync(id);
    }


}
