'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Download,
  FileJson,
  FolderOpen,
  Menu,
  MoveDown,
  NotebookText,
  RefreshCw,
} from 'lucide-react'

type JsonFile = {
  name: string
  description: string
  path: string
}

const jsonFiles: JsonFile[] = [
  {
    name: 'Guia do Usuário Ganymede',
    description: 'Como usar o Ganymede (PT-BR)',
    path: '/ganymede/1523.json',
  },
  {
    name: '[GP4] Mais onde estão os dofus?',
    description: 'Questline',
    path: '/ganymede/1524.json',
  },
]

export function GanymedePage() {
  const handleDownload = (path: string) => {
    window.open(path, '_blank')
  }

  return (
    <section className="max-w-4xl mx-auto p-6">
      <Card className="bg-[#2a2a2a] text-[#e6d7c3] mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Download className="h-6 w-6 text-amber-500" />
            Baixar o Ganymede
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Primeiro, você precisa ter o Ganymede instalado para usar os guias.
          </p>
          <a
            href="https://ganymede-dofus.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-md transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Ganymede
          </a>
        </CardContent>
      </Card>

      <Card className="bg-[#2a2a2a] text-[#e6d7c3] mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileJson className="h-6 w-6 text-amber-500" />
            Como importar os arquivos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li className="flex items-center gap-2">
              <Menu className="h-4 w-4 text-amber-500" />
              Abra o Ganymede e clique no menu
            </li>
            <li className="flex items-center gap-2">
              <NotebookText className="h-4 w-4 text-amber-500" />
              Vá em &quot;Guias&quot;
            </li>
            <li className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4 text-amber-500" />
              Clique no ícone de pasta
            </li>
            <li className="flex items-center gap-2">
              <MoveDown className="h-4 w-4 text-amber-500" />
              Baixe e mova os arquivos JSON para dentro da pasta que abriu
            </li>
            <li className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-amber-500" />
              Reinicie o Ganymede
            </li>
          </ol>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {jsonFiles.map((file) => (
          <Card
            key={file.path}
            className="bg-[#2a2a2a] text-[#e6d7c3] hover:scale-105 transition-transform duration-200 cursor-pointer"
            onClick={() => handleDownload(file.path)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Download className="h-6 w-6 text-amber-500" />
                {file.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">{file.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
