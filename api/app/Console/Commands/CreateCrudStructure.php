<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Filesystem\Filesystem;

class CreateCrudStructure extends Command
{
    protected $signature = 'make:crud {name}';
    protected $description = 'Create a CRUD structure including Contract, Eloquent, Service, and Controller';

    protected $filesystem;

    public function __construct(Filesystem $filesystem)
    {
        parent::__construct();
        $this->filesystem = $filesystem;
    }

    protected function createDirectory($path)
    {
        if (!$this->filesystem->isDirectory($path)) {
            $this->filesystem->makeDirectory($path, 0755, true);
        }
    }

    protected function createClass($directory, $name, $template)
    {
        $path = "app/{$directory}/{$name}.php";

        if ($this->filesystem->exists($path)) {
            $this->error("{$name} already exists!");
            return;
        }

        $this->filesystem->put($path, $template);
    }

    // Methods to return the templates for Contract, Eloquent, Service, and Controller
    // Here you should return the basic structure for each file.
    // For example:
    protected function getContractTemplate($name)
    {
        return "<?php\n\nnamespace App\Repositories\Contracts;\n\ninterface {$name}RepositoryInterface\n{\n    // Methods definition\n}";
    }

    protected function getEloquentTemplate($name)
    {
        return "<?php\n\nnamespace App\Repositories\Eloquent;\n\nuse App\Repositories\Contracts\\{$name}RepositoryInterface;\n\nclass {$name}Repository implements {$name}RepositoryInterface\n{\n    // Implementation\n}";
    }

    protected function getServiceTemplate($name)
    {
        return "<?php\n\nnamespace App\Services;\n\nuse App\Repositories\Contracts\\{$name}RepositoryInterface;\n\nclass {$name}Service\n{\n    // Service methods\n}";
    }

    protected function getControllerTemplate($name)
    {
        return "<?php\n\nnamespace App\Http\Controllers;\n\nuse App\Services\\{$name}Service;\n\nuse Illuminate\Http\Request;\n\nclass {$name}Controller extends Controller\n{\n    // Controller methods\n}";
    }

    public function handle()
    {
        $name = ucfirst($this->argument('name'));

        $this->createDirectory('app/Repositories/Contracts');
        $this->createDirectory('app/Repositories/Eloquent');
        $this->createDirectory('app/Services');
        $this->createDirectory('app/Http/Controllers');

        $this->createClass('Repositories/Contracts', $name . 'RepositoryInterface', $this->getContractTemplate($name));
        $this->createClass('Repositories/Eloquent', $name . 'Repository', $this->getEloquentTemplate($name));
        $this->createClass('Services', $name . 'Service', $this->getServiceTemplate($name));
        $this->createClass('Http/Controllers', $name . 'Controller', $this->getControllerTemplate($name));

        $this->info('CRUD structure created successfully.');
    }
}
