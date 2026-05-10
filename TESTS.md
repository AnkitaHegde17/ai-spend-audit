# Testing

## Functional Tests

### Audit Generation
- Verified savings calculations
- Verified recommendations generation
- Verified different tools produce different savings rates

### Persistence
- Verified monthly spend persists after browser refresh

### UI Testing
- Verified responsive layout
- Verified cards render correctly
- Verified conditional CTA banner

### Deployment
- Verified successful Vercel deployment
- Verified live production URL accessibility

## Manual Test Cases

| Feature | Input | Expected Result |
|---|---|---|
| ChatGPT Savings | Spend = 100 | 15% savings |
| Claude Savings | Spend = 100 | 25% savings |
| Cursor Savings | Spend = 100 | 30% savings |
| High Savings CTA | Spend = 3000 | Consultation banner shown |
| Persistence | Refresh page | Spend value retained |

## Result
All major features tested successfully.