'use client'


            className="text-white-700 rounded-lg border-2 border-secondary bg-secondary bg-gradient-to-b from-muted/50 to-muted p-6 text-lg no-underline outline-none focus:shadow-md"
          <br />
          <button type="submit" className="flex-row cursor-pointer items-center justify-center rounded-md m-2 p-2 shadow-md hover:bg-secondary">Save</button>
          <button type="button" className="flex-row cursor-pointer items-center justify-center rounded-md m-2 p-2 shadow-md hover:bg-secondary" onClick={toggleEditMode}>Cancel</button>
          <p className="text-white-700 rounded-lg border-2 border-secondary bg-secondary bg-gradient-to-b from-muted/50 to-muted p-6 text-lg no-underline outline-none focus:shadow-md">{text}</p>
          <button type="button" className="flex cursor-pointer items-center justify-center rounded-md m-2 p-2 shadow-md hover:bg-secondary" onClick={toggleEditMode}>Edit</button>