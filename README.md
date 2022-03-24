# TCPBookstore
A client asked for a solution to a problem that their bookstore was having. They wanted to be able to access their inventory of books across their 3 store locations.
Their current inventory system consisted of excel spreadsheets managed by the store manager at each location. Their inventory system was disconnect and was the cause of frustation when customers inquired about inventory at the other locations.

My solution is to create an centralized inventory system that would allow users to search, view, add, edit, and delete their booklist inventory.

The client asked for some security measures which would include select employees not having the ability to delete inventory.


Breakdown:
Index page will serve as the home screen. Here users will log in.
Upon logging in (depending on access), the user will come to a page of options:
  For employees, the options are Add Book and Booklist.
      Add Book: allows the user to fill in a form and submit information on a newly received book.
      Booklist: allows the user to view the complete TCP Bookstore inventory
        - The booklist can be sorted in alphabetical or numerical order.
        
  For managers, the options are Add Book, Booklist, and Employee Info.
      Add Book: allows the user to fill in a form and submit information on a newly received book.
      Booklist: allows the user to view the complete TCP Bookstore inventory
        - The booklist can be sorted in alphabetical or numerical order.
      Employee Info: allows the user to manage employee profiles
        - Type of access is determine here (Employee or Manager)
