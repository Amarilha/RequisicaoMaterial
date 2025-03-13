 // Toggle sidebar
        document.getElementById('toggleSidebar').addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            const logo = document.getElementById('logo');
            const menuItems = document.getElementById('menuItems');
            const userSection = document.getElementById('userSection');
            const toggleIcon = this.querySelector('i');
            const menuText = document.querySelectorAll('.menu-text');
            const userInfo = document.querySelector('.user-info');
            const userDropdownIcon = document.getElementById('userDropdownIcon');

            sidebar.classList.toggle('w-64');
            sidebar.classList.toggle('w-16');

            if (sidebar.classList.contains('w-16')) {
                logo.classList.add('hidden');
                menuText.forEach(text => text.classList.add('hidden'));
                userInfo.classList.add('hidden');
                userDropdownIcon.classList.add('hidden'); // Esconde o ícone
                toggleIcon.classList.remove('fa-chevron-left');
                toggleIcon.classList.add('fa-bars');
            } else {
                logo.classList.remove('hidden');
                menuText.forEach(text => text.classList.remove('hidden'));
                userInfo.classList.remove('hidden');
                toggleIcon.classList.remove('fa-chevron-down');
                userDropdownIcon.classList.remove('hidden'); // Mostra o ícone novamente
                toggleIcon.classList.remove('fa-chevron-right');
                toggleIcon.classList.add('fa-chevron-left');
            }
        });

        // Initialize SortableJS
        new Sortable(document.getElementById('todo'), {
            group: 'kanban',
            animation: 150,
            ghostClass: 'sortable-ghost'
        });
        new Sortable(document.getElementById('inprogress'), {
            group: 'kanban',
            animation: 150,
            ghostClass: 'sortable-ghost'
        });
        new Sortable(document.getElementById('done'), {
            group: 'kanban',
            animation: 150,
            ghostClass: 'sortable-ghost'
        });

        // Add task function
        function addTask(columnId) {
            const column = document.getElementById(columnId);
            const task = document.createElement('div');
            task.className = 'bg-gray-100 p-4 rounded-lg shadow';
            task.draggable = true;
            task.innerHTML = `
                <h3 class="font-bold">New Task</h3>
                <p>Description of new task.</p>
            `;
            column.appendChild(task);
        }
 