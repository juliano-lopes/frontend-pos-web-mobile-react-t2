import React, { useState } from 'react';
import type { AccessibilityResource } from '../types/resources';

interface AccessibilityResourcesCatalogProps {
    resourcesData: AccessibilityResource[];
    catalogTitle: string;
}

const AccessibilityResourcesCatalog: React.FC<AccessibilityResourcesCatalogProps> = ({ resourcesData, catalogTitle }) => {
    const [resources] = useState<AccessibilityResource[]>(resourcesData);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredResources = resources.filter(resource =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">{catalogTitle}</h2>

            <div className="mb-4">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar recursos por nome, tipo ou descrição..."
                        aria-label="Campo de busca de recursos"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="text-center mb-3">
                {searchTerm && filteredResources.length > 0 && (
                    <p role='alert' className="lead text-success">
                        <strong>{filteredResources.length}</strong> {filteredResources.length === 1 ? 'resultado' : 'resultados'} encontrado{filteredResources.length === 1 ? '' : 's'}.
                    </p>
                )}
                {searchTerm && filteredResources.length === 0 && (
                    <div className="alert alert-info" role="alert">
                        Nenhum recurso encontrado para "{searchTerm}".
                    </div>
                )}

                {!searchTerm && resources.length > 0 && (
                    <p className="lead text-muted">
                        Exibindo todos os <strong>{resources.length}</strong> recursos disponíveis.
                    </p>
                )}
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredResources.sort((a, b) => a.name.localeCompare(b.name))
                    .map(resource => (
                        <div className="col" key={resource.id}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title">{resource.name}</h3>
                                    <h4 className="card-subtitle mb-2 text-muted">{resource.type}</h4>
                                    <p className="card-text flex-grow-1">{resource.description}</p>
                                    {resource.link && (
                                        <a aria-label={`Saiba Mais sobre ${resource.name}`} href={resource.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-auto">
                                            Saiba Mais
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default AccessibilityResourcesCatalog;