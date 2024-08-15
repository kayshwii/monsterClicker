A simple clicker game to I'm writing to learn React.

All credit for images used go to https://www.flaticon.com/packs/fantastic-characters-22

8/5/2024:
    First Commit

8/8/2024:
    Over the past few days, monsterClicker has evolved. As I learn new methods and techniques, I try to use as much of the new tools in my code. I have been working on trying to make my code a bit more reuseable and modular. My health bar and buttons are all handled with components now. As the game grows, no repeating code will be needed to render things like new upgrades or monster health.
    New features in the works:
        - Menus!
        - A Shop section to render all of the upgrades.
        - A player info menu 
        - Areas to explore with different monsters.
        - Player health

8/9/2024:
    Added the shop! Did the best I could do to make it responsive. Looks pretty cool. The next hurdle I'm stuck at is adding a dynamic menu. I may be over thinking it but I'll try to make some updates tomorrow.

8/10/2024:
    Figured out a solution to the menu! The menu now renders dynamically based on selected option.

8/12/2024:
    Started work on the Explore menu. This is where users will find new monsters! Updated states and functions to handle new monsters health, image, and gp rewards.

8/14/2024:
    I've been struggling with creating dynamic menus. My issue is getting access to functions or states that are local to the main app and do not exist in the component. Today I had a breakthrough: I can pass those objects as arguments to my component!

8/15/2024:
    Big updates today. Added areas to explore with new monsters. Nothing is balanced yet and monsters are just kind of random as far as health and gold drops go. Next update: Saves!