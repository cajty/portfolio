import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

export interface Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        url: string;
    };
    topics: string[];
}

const REPOS_TO_FETCH = ['Farm_Management', 'Citronix', 'Banking-Security', 'IdeaAssembler',
    'baing_frontEnd_Angular', 'Bati-Cuisine', '-Evento'];
const GITHUB_USERNAME = 'cajty';
const GITHUB_TOKEN = process.env.VITE_GITHUB_TOKEN;

export function useGithubProjects() {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            if (!GITHUB_TOKEN) {
                setError("GitHub token is required");
                setLoading(false);
                return;
            }

            try {
                const octokit = new Octokit({
                    auth: GITHUB_TOKEN,
                    headers: {
                        'X-GitHub-Api-Version': '2024-02-01'
                    }
                });

                const reposResponse = await octokit.repos.listForUser({
                    username: GITHUB_USERNAME,
                });

                const filteredRepos = reposResponse.data
                    .filter(repo => REPOS_TO_FETCH.includes(repo.name));

                const reposWithTopics = await Promise.all(
                    filteredRepos.map(async (repo) => {
                        try {
                            const topicsResponse = await octokit.repos.getAllTopics({
                                owner: GITHUB_USERNAME,
                                repo: repo.name
                            });

                            return {
                                ...repo,
                                topics: topicsResponse.data.names || []
                            } as Repository;
                        } catch (topicError) {
                            console.warn(`Could not fetch topics for ${repo.name}`, topicError);
                            return { ...repo, topics: [] } as Repository;
                        }
                    })
                );

                setProjects(reposWithTopics);
                setLoading(false);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to fetch projects';
                setError(errorMessage);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
}