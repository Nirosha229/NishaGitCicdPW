import {test,expect} from "@playwright/test";
 test("Create a brand new event",async({page})=>{
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("anshika@gmail.com");
    await page.getByLabel("Password").fill("Iamking@000");
    await page.locator("#login-btn").click();
    console.log(await page.getByRole("link",{name : "Browse Events →"}).textContent());
    expect (await page.getByRole("link",{name : "Browse Events →"}).isVisible()).toBeTruthy();
    
    await page.getByRole("button",{name : "Admin"}).waitFor()
    await page.getByRole("button",{name : "Admin"}).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click();
    const title = "Wakeup & Rise";
    await page.locator("#event-title-input").fill(title);
    await page.locator("#admin-event-form textarea").fill("time is precious.");
    await page.getByLabel("City").fill("Banglore");
    await page.getByLabel("Venue").fill("Gopalan Global axis H Block");
    
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2027-11-07T09:10');
  await page.getByLabel("Price ($)").fill("100");
  await page.getByLabel("Total Seats").fill("50");
  await page.locator("#add-event-btn").click(); 
  console.log(await page.locator(".leading-snug").textContent())
  expect (await page.locator(".leading-snug").textContent()).toBe("Event created!");

 
await page.getByTestId("nav-events").click();
//await page.getByRole('link',{name : "Events"}).click();
 const eventCards = page.getByTestId('event-card');
  await expect(eventCards.first()).toBeVisible();
   const targetCard = eventCards.filter({ hasText: title }).first();
  await expect(targetCard).toBeVisible({ timeout: 5000 });
const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
  console.log(`Seats before booking: ${seatsBeforeBooking}`);

  await targetCard.getByTestId('book-now-btn').click();

  console.log("default ticket count"+ " " +await page.locator("#ticket-count").textContent());

expect(await page.locator("#ticket-count").textContent()).toBe("1");
await page.getByLabel("Full Name").fill("Anshika");
await page.locator("#customer-email").fill("anshika@gmail.com")
await page.getByPlaceholder("+91 98765 43210").fill("98765 43210")
await page.locator(".confirm-booking-btn").click()

expect(await page.locator(".items-center").first()).toBeVisible()
const bookingRef = (await page.locator(".booking-ref").innerText()).trim()
  expect(bookingRef.charAt(0)).toBe(title.trim().charAt(0).toUpperCase());


  await page.getByRole("link",{name :"View My Bookings"}).click()
  
  console.log(await page.url())

  //expect( page.url()).toBe("https://eventhub.rahulshettyacademy.com/bookings")

  const bookingCards = page.locator('#booking-card');
  await expect(bookingCards.first()).toBeVisible();

  // Find the card that contains our booking ref (via CSS class inside the card)
  const matchingCard = bookingCards.filter({ has: page.locator('.booking-ref', { hasText: bookingRef }) });
  await expect(matchingCard).toBeVisible();
  await expect(matchingCard).toContainText(title);





 })